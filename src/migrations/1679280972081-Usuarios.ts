import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class Usuarios1679280972081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "senha",
                        type: "varchar",
                    }
                ]
            }),
            true
        )
        await queryRunner.createIndex(
            "usuarios",
            new TableIndex({
                name: "IDX_USUARIOS_NOME",
                columnNames: ["nome"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
