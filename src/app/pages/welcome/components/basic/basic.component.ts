import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilForm } from 'src/app/utils/util.form';
import { UserStore } from '../../store/user.store';
import { debounceTime, map } from 'rxjs/operators';
import { ModelUser } from 'src/app/pages/models/user.model';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

  formUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: UserStore
  ) {
    this.formUser = UtilForm.user(this.fb);
    this.store.updateBasic(
      this.formUser.valueChanges.pipe(
        debounceTime(500),
        map((response: ModelUser) => { return { name: response.name, email: response.email } })
      )
    );
  }

  ngOnInit() {
  }


}
