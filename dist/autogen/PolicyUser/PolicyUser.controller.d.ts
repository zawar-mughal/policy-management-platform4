import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { PolicyUser } from './dtos/PolicyUser.dto';
import { PolicyUserService } from './PolicyUser.service';
export declare class PolicyUserController implements CrudController<PolicyUser> {
    service: PolicyUserService;
    constructor(service: PolicyUserService);
    get base(): CrudController<PolicyUser>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<PolicyUser> | PolicyUser[]>;
    get(req: CrudRequest): Promise<PolicyUser>;
    create(req: CrudRequest, dto: PolicyUser): Promise<PolicyUser>;
    createMany(req: CrudRequest, dto: CreateManyDto<PolicyUser>): Promise<PolicyUser[]>;
    update(req: CrudRequest, dto: PolicyUser): Promise<PolicyUser>;
    replace(req: CrudRequest, dto: PolicyUser): Promise<PolicyUser>;
    delete(req: CrudRequest): Promise<void | PolicyUser>;
}
