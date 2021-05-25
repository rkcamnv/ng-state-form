import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModelAddress, ModelUser } from "../pages/models/user.model";

export class UtilForm {
    static user = (fb: FormBuilder, model: ModelUser = null as any): FormGroup => {
        return fb.group({
            name: [model?.name || '', [Validators.required]],
            email: [model?.email || '', [Validators.required]],
            address: UtilForm.address(fb, model?.address)
        })
    }

    static address = (fb: FormBuilder, model: ModelAddress = null as any): FormGroup => {
        return fb.group({
            country: [model?.country || '', [Validators.required]],
            city: [model?.city || '', [Validators.required]]
        })
    }
}