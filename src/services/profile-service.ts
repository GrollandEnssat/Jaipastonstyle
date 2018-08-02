import {Injectable} from "@angular/core";
import {PROFILE} from "./mock-profile";

@Injectable()
export class ProfileService {
  private profile:any;

  constructor() {
    this.profile = PROFILE;
  }

  get() {
    return this.profile;
  }


}
