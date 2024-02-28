import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1708950262101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

         
        await queryRunner.createTable(
            new Table({
                name: "books",
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
                        name: "genre",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "author_id",
                        type: "int",
                    },   
                ],
                foreignKeys:[
                    {
                    columnNames: ["author_id"],
                    referencedTableName: "authors",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
