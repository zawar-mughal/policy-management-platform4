import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { PolicyAssignment } from './dtos/PolicyAssignment.dto';
import { PolicyAssignmentService } from './PolicyAssignment.service';
export declare class PolicyAssignmentController implements CrudController<PolicyAssignment> {
    service: PolicyAssignmentService;
    constructor(service: PolicyAssignmentService);
    get base(): CrudController<PolicyAssignment>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<PolicyAssignment> | PolicyAssignment[]>;
    get(req: CrudRequest): Promise<PolicyAssignment>;
    create(req: CrudRequest, dto: PolicyAssignment): Promise<PolicyAssignment>;
    createMany(req: CrudRequest, dto: CreateManyDto<PolicyAssignment>): Promise<PolicyAssignment[]>;
    update(req: CrudRequest, dto: PolicyAssignment): Promise<PolicyAssignment>;
    replace(req: CrudRequest, dto: PolicyAssignment): Promise<PolicyAssignment>;
    delete(req: CrudRequest): Promise<void | PolicyAssignment>;
}
