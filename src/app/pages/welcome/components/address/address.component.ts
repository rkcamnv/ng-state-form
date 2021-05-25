import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UtilForm } from 'src/app/utils/util.form';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {

  formAddress!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: UserStore
  ) {
    this.formAddress = UtilForm.address(this.fb);
    this.store.updateAddress(this.formAddress.valueChanges.pipe(debounceTime(200)))
  }

  ngOnInit() {

  }

}
