import knex from "knex";
import Knex from "knex";

// up method
export async function up(knex: Knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("avatar").notNullable();
		table.integer("whatsapp").notNullable();
		table.string("bio").notNullable();
	});
}

// down method
export async function down(knex: Knex) {
	return knex.schema.dropTable("users");
}
