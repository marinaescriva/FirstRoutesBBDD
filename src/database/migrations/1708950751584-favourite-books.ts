import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

export class FavouriteBooks1708950751584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
         
        await queryRunner.createTable(
            new Table({
                name: "favourite-books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "book_id",
                        type: "int"
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },   
                ],
                foreignKeys:[
                    {
                    columnNames: ["user_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    },
                    {
                    columnNames: ["book_id"],
                    referencedTableName: "books",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    }
                ],
                uniques:[
                        new TableUnique({
                           name: "user_book_unique",
                           columnNames: ["user_id", "book_id"],
                        }),
                     ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("favourite-books");
    }

}
