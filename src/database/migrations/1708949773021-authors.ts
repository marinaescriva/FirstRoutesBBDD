import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Authors1708949773021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "nationality",
                        type: "varchar",
                        length: "50",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authors");
    }

}
