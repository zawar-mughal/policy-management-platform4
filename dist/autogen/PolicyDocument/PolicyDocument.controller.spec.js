"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const PolicyDocument_dto_1 = require("./dtos/PolicyDocument.dto");
const PolicyDocument_controller_1 = require("./PolicyDocument.controller");
const PolicyDocument_service_1 = require("./PolicyDocument.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('PolicyDocumentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: PolicyDocument_service_1.PolicyDocumentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [PolicyDocument_controller_1.PolicyDocumentController],
            providers: [PolicyDocument_service_1.PolicyDocumentService, ApiServiceProvider],
        }).compile();
        controller = module.get(PolicyDocument_controller_1.PolicyDocumentController);
        spyService = module.get(PolicyDocument_service_1.PolicyDocumentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PolicyDocumentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PolicyDocumentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new PolicyDocument_dto_1.PolicyDocument();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=PolicyDocument.controller.spec.js.map