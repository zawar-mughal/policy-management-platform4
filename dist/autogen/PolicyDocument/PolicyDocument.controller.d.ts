import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { PolicyDocument } from './dtos/PolicyDocument.dto';
import { PolicyDocumentService } from './PolicyDocument.service';
export declare class PolicyDocumentController implements CrudController<PolicyDocument> {
    service: PolicyDocumentService;
    constructor(service: PolicyDocumentService);
    get base(): CrudController<PolicyDocument>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<PolicyDocument> | PolicyDocument[]>;
    get(req: CrudRequest): Promise<PolicyDocument>;
    create(req: CrudRequest, dto: PolicyDocument): Promise<PolicyDocument>;
    createMany(req: CrudRequest, dto: CreateManyDto<PolicyDocument>): Promise<PolicyDocument[]>;
    update(req: CrudRequest, dto: PolicyDocument): Promise<PolicyDocument>;
    replace(req: CrudRequest, dto: PolicyDocument): Promise<PolicyDocument>;
    delete(req: CrudRequest): Promise<void | PolicyDocument>;
}
