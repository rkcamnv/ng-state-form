import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { combineLatest } from "rxjs";
import { tap } from "rxjs/operators";
import { ModelAddress, ModelBasic, ModelUser } from "../../models/user.model";

interface UserState {
    user: ModelUser;
    address: ModelAddress;
    basic: ModelBasic;
}

@Injectable({ providedIn: 'root' })
export class UserStore extends ComponentStore<UserState>{

    constructor() {
        super({ user: null as any, address: null as any, basic: null as any });
        this.fetchForm$(
            combineLatest([this.select(s => s.basic), this.select(s => s.address)])
        );
    }

    vm$ = this.select(
        this.state$,
        ({ user }) => ({
            user: user
        }),
        { debounce: true }
    );

    updateBasic = this.updater<ModelBasic>((s, basic) => ({
        ...s,
        basic: basic
    }));

    updateAddress = this.updater<ModelAddress>((s, address) => {
        return {
            ...s,
            address: address
        }
    });

    fetchForm$ = this.effect<[ModelBasic, ModelAddress]>(
        trigger$ =>
            trigger$.pipe(
                tap(([basic, address]) => {
                    if (basic && address) {
                        const user: ModelUser = {
                            name: basic?.name || '',
                            email: basic?.email || '',
                            address: {
                                country: address?.country || '',
                                city: address?.city || ''
                            }
                        }

                        this.patchState({
                            user: user
                        })
                    }


                })
            )
    );
}