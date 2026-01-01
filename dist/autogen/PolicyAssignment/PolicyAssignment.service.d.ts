import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { PolicyAssignment } from './PolicyAssignment.entity';
export declare class PolicyAssignmentService extends TypeOrmCrudService<PolicyAssignment> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
