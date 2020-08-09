import Knex from "knex";

// up method
export async function up(knex: Knex) {
	return knex.schema.createTable("classes", (table) => {
		table.increments("id").primary();
		table.string("subject").notNullable();
		table.string("cost").notNullable();

		table
			.integer("user_id")
			.notNullable()
			.references("id")
			.inTable("users")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
	});
}

// down method
export async function down(knex: Knex) {
	return knex.schema.dropTable("classes");
}
