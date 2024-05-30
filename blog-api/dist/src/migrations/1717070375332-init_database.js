"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDatabase1717070375332 = void 0;
class InitDatabase1717070375332 {
    constructor() {
        this.name = 'InitDatabase1717070375332';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "posts"`);
    }
}
exports.InitDatabase1717070375332 = InitDatabase1717070375332;
//# sourceMappingURL=1717070375332-init_database.js.map