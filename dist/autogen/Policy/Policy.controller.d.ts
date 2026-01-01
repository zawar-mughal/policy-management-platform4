import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Policy } from './dtos/Policy.dto';
import { PolicyService } from './Policy.service';
export declare class PolicyController implements CrudController<Policy> {
    service: PolicyService;
    constructor(service: PolicyService);
    get base(): CrudController<Policy>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Policy> | Policy[]>;
    get(req: CrudRequest): Promise<Policy>;
    create(req: CrudRequest, dto: Policy): Promise<Policy>;
    createMany(req: CrudRequest, dto: CreateManyDto<Policy>): Promise<Policy[]>;
    update(req: CrudRequest, dto: Policy): Promise<Policy>;
    replace(req: CrudRequest, dto: Policy): Promise<Policy>;
    delete(req: CrudRequest): Promise<void | Policy>;
}
