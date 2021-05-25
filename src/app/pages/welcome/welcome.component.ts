import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilForm } from 'src/app/utils/util.form';
import { UserStore } from './store/user.store';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  vm$ = this.store.vm$;

  formUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: UserStore
  ) { }

  ngOnInit() {
    this.formUser = UtilForm.user(this.fb);
    this.vm$.pipe().subscribe(({ user }) => {
      if (!user) return;
      this.formUser.setValue({
        name: user?.name || '',
        email: user?.email || '',
        address: {
          country: user.address.country,
          city: user.address.city
        },
      })
    })
  }

  _submitForm() {
    this.formUser.getRawValue();
    console.log("🚀 ~ file: welcome.component.ts ~ line 26 ~ WelcomeComponent ~ _submitForm ~  this.formUser.getRawValue();", this.formUser.getRawValue());
    console.log("🚀 ~ file: welcome.component.ts ~ line 43 ~ WelcomeComponent ~ _submitForm ~  this.formUser", this.formUser.status)
  }
}
