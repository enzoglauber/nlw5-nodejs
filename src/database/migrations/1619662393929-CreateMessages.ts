import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMessages1619662393929 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "admin_id",
            type: "uuid",
            isNullable: true // pois o atendimento pode nao existir
          },
          {
            name: "user_id",
            type: "uuid"
          },
          {
            name: "text",
            type: "varchar"
          },

          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "kf_user",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages")
  }

}
