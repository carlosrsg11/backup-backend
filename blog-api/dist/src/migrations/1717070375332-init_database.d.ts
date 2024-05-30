import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitDatabase1717070375332 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
