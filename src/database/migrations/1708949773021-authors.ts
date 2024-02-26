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
                        name: "nombre",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "nacionalidad",
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
