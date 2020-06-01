
exports.up = async function(knex) {
  
    await knex.schema.createTable("auctioneers", (table) => {
        table.increments("id")
        table.string("name").unique().notNullable()
        table.string("password").notNullable()
    })
    
    await knex.schema.createTable("items", (table) => {
        table.increments("id")
        table.integer("auctioneer_id").notNullable().references("id").inTable("auctioneers").onDelete("CASCADE").onUpdate("CASCADE")
        table.string("name").notNullable()
        table.string("description").notNullable()
        table.integer("price").notNullable()
        table.string("image_url")
        table.string("end_date")
        table.timestamp("recorded_on")
    })

    await knex.schema.createTable("bidders", (table) => {
        table.increments("id")
        table.string("name").unique().notNullable()
        table.string("password").notNullable()
    })
    
    await knex.schema.createTable("offers", (table) => {
        table.integer("item_id").notNullable().references("id").inTable("items").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("bidder_id").notNullable().references("id").inTable("bidders").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("ammount").notNullable()
        table.timestamp("recorded_on")

        
    table.primary([ "item_id", "bidder_id" ]);
    })
    

    
      
      };
      
      exports.down = async function(knex) {
          await knex.schema.dropTableIfExists("offers")
          await knex.schema.dropTableIfExists("items")
          await knex.schema.dropTableIfExists("bidders")
          await knex.schema.dropTableIfExists("auctioneers")
      };
      