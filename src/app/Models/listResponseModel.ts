import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{ //message ve success bilgisi de gelcek
    data:T[];
}