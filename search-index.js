var searchIndex = JSON.parse('{\
"eventually":{"doc":"","i":[[8,"Aggregate","eventually","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"Id","","Aggregate identifier: this should represent an unique…",0,null],[16,"State","","State of the Aggregate: this should represent the Domain…",0,null],[16,"Event","","Represents a specific, domain-related change to the…",0,null],[16,"Command","","Commands are all the possible operations available on an…",0,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",0,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",0,[[],["result",4]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",0,[[],[["box",3],["pin",3]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",1,[[],["result",4]]],[6,"AggregateId","","A short extractor type for the Aggregate [`Id`].",null,null],[3,"AggregateRoot","","An `AggregateRoot` represents an handler to the…",null,null],[3,"AggregateRootBuilder","","Builder type for new [`AggregateRoot`] instances.",null,null],[3,"Repository","","Implementation of the [Repository pattern] for storing,…",null,null],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",2,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",2,null],[16,"Error","","Possible errors returned by the `EventStore` when…",2,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",2,[[["vec",3]],[["pin",3],["box",3]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",2,[[["select",4]],[["pin",3],["box",3]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",2,[[],[["pin",3],["box",3]]]],[8,"Versioned","","Data type that carries a version for Optimistic…",null,null],[10,"version","","Current version of the data.",3,[[]]],[0,"aggregate","","",null,null],[6,"AggregateId","eventually::aggregate","A short extractor type for the Aggregate [`Id`].",null,null],[8,"Aggregate","","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"Id","","Aggregate identifier: this should represent an unique…",0,null],[16,"State","","State of the Aggregate: this should represent the Domain…",0,null],[16,"Event","","Represents a specific, domain-related change to the…",0,null],[16,"Command","","Commands are all the possible operations available on an…",0,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",0,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",0,[[],["result",4]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",0,[[],[["box",3],["pin",3]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",1,[[],["result",4]]],[3,"AggregateRootBuilder","","Builder type for new [`AggregateRoot`] instances.",null,null],[3,"AggregateRoot","","An `AggregateRoot` represents an handler to the…",null,null],[8,"Optional","","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"Id","","Identifier type of the Aggregate.",4,null],[16,"State","","State of the Aggregate.",4,null],[16,"Event","","Events produced and supported by the Aggregate.",4,null],[16,"Command","","Commands supported by the Aggregate.",4,null],[16,"Error","","Error produced by the the Aggregate while applying…",4,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",4,[[],["result",4]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",4,[[],["result",4]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",4,[[],[["pin",3],["box",3]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",4,[[],[["pin",3],["box",3]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",4,[[],["asaggregate",3]]],[0,"versioning","eventually","",null,null],[8,"Versioned","eventually::versioning","Data type that carries a version for Optimistic…",null,null],[10,"version","","Current version of the data.",3,[[]]],[0,"repository","eventually","",null,null],[4,"Error","eventually::repository","Error type returned by the [`Repository`].",null,null],[13,"Aggregate","","Error returned by the [`Aggregate`], usually when…",5,null],[13,"Store","","Error returned by the underlying [`EventStore`].",5,null],[6,"Result","","Result type returned by the [`Repository`].",null,null],[3,"Repository","","Implementation of the [Repository pattern] for storing,…",null,null],[0,"store","eventually","",null,null],[3,"PersistedEvent","eventually::store","An [`Event`] wrapper for events that have been…",null,null],[4,"Select","","Selection operation for the events to capture in an…",null,null],[13,"All","","To return all the [`Event`]s in the [`EventStream`].",6,null],[13,"From","","To return a slice of the [`EventStream`], starting from…",6,null],[6,"EventStream","","Stream type returned by the [`EventStore::stream`] method.",null,null],[8,"AppendError","","Error type returned by [`append`] in [`EventStore`]…",null,null],[10,"is_conflict_error","","Returns true if the error is due to a version conflict…",7,[[]]],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",2,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",2,null],[16,"Error","","Possible errors returned by the `EventStore` when…",2,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",2,[[["vec",3]],[["pin",3],["box",3]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",2,[[["select",4]],[["pin",3],["box",3]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",2,[[],[["pin",3],["box",3]]]],[0,"optional","eventually","",null,null],[8,"Aggregate","eventually::optional","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"Id","","Identifier type of the Aggregate.",4,null],[16,"State","","State of the Aggregate.",4,null],[16,"Event","","Events produced and supported by the Aggregate.",4,null],[16,"Command","","Commands supported by the Aggregate.",4,null],[16,"Error","","Error produced by the the Aggregate while applying…",4,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",4,[[],["result",4]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",4,[[],["result",4]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",4,[[],[["pin",3],["box",3]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",4,[[],[["pin",3],["box",3]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",4,[[],["asaggregate",3]]],[3,"AsAggregate","","Newtype pattern to ensure compatibility between…",null,null],[0,"inmemory","eventually","",null,null],[3,"EventStoreBuilder","eventually::inmemory","Builder for [`EventStore`] instances.",null,null],[3,"EventStore","","An in-memory [`EventStore`] implementation, backed by an…",null,null],[11,"from","eventually::aggregate","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","eventually::repository","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","eventually::store","",11,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","eventually::optional","",12,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","eventually::inmemory","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"version","eventually::aggregate","",8,[[]]],[11,"version","eventually::store","",11,[[]]],[11,"fmt","eventually::repository","",5,[[["formatter",3]],[["error",3],["result",4]]]],[11,"source","","",5,[[],[["option",4],["error",8]]]],[11,"deserialize","eventually::store","",11,[[],[["result",4],["persistedevent",3]]]],[11,"eq","eventually::aggregate","",8,[[["aggregateroot",3]]]],[11,"eq","eventually::store","",6,[[["select",4]]]],[11,"ne","","",6,[[["select",4]]]],[11,"eq","","",11,[[["persistedevent",3]]]],[11,"ne","","",11,[[["persistedevent",3]]]],[11,"serialize","eventually::aggregate","",8,[[],["result",4]]],[11,"serialize","eventually::store","",11,[[],["result",4]]],[11,"fmt","","",6,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",11,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","eventually::repository","",5,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","eventually::aggregate","",9,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",8,[[["formatter",3]],[["error",3],["result",4]]]],[11,"from","eventually::store","",11,[[],["persistedevent",3]]],[11,"from","eventually::aggregate","",9,[[["arc",3]],["aggregaterootbuilder",3]]],[11,"clone","","",9,[[],["aggregaterootbuilder",3]]],[11,"clone","eventually::store","",6,[[],["select",4]]],[11,"clone","","",11,[[],["persistedevent",3]]],[11,"from","eventually::optional","",12,[[],["asaggregate",3]]],[11,"clone","","",12,[[],["asaggregate",3]]],[11,"clone","eventually::inmemory","",14,[[],["eventstore",3]]],[11,"apply","eventually::optional","",12,[[],["result",4]]],[11,"handle","","",12,[[],[["pin",3],["box",3]]]],[11,"append","eventually::inmemory","",14,[[["vec",3]],[["box",3],["pin",3]]]],[11,"stream","","",14,[[["select",4]],[["pin",3],["box",3]]]],[11,"remove","","",14,[[],[["box",3],["pin",3]]]],[11,"fmt","","",14,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","eventually::optional","",12,[[["formatter",3]],[["error",3],["result",4]]]],[11,"default","eventually::inmemory","",14,[[],["eventstore",3]]],[11,"id","eventually::aggregate","Returns a reference to the Aggregate [`Id`] that…",8,[[]]],[11,"state","","Returns a reference to the current Aggregate [`State`].",8,[[]]],[11,"handle","","Handles the submitted [`Command`] using the…",8,[[]]],[11,"build","","Builds a new [`AggregateRoot`] instance for the specified…",9,[[],["aggregateroot",3]]],[11,"build_with_state","","Builds a new [`AggregateRoot`] instance for the specified…",9,[[],["aggregateroot",3]]],[11,"new","eventually::repository","Creates a new `Repository` instance, using the…",10,[[["aggregaterootbuilder",3]],["repository",3]]],[11,"get","","Returns the [`Aggregate`] from the `Repository` with the…",10,[[]]],[11,"add","","Adds a new [`State`] of the [`Aggregate`] into the…",10,[[["aggregateroot",3]]]],[11,"remove","","Removes the specified [`Aggregate`] from the `Repository`,…",10,[[]]],[11,"with_version","eventually::store","Updates the event version to the one specified.",11,[[],["persistedevent",3]]],[11,"with_sequence_number","","Updates the sequence number version to the one specified.",11,[[],["persistedevent",3]]],[11,"sequence_number","","Returns the event sequence number.",11,[[]]],[11,"take","","Unwraps the inner [`Event`] from the `PersistedEvent`…",11,[[]]],[11,"for_aggregate","eventually::inmemory","Builds a new [`EventStore`] instance compatible with the…",13,[[],["eventstore",3]]]],"p":[[8,"Aggregate"],[8,"AggregateExt"],[8,"EventStore"],[8,"Versioned"],[8,"Aggregate"],[4,"Error"],[4,"Select"],[8,"AppendError"],[3,"AggregateRoot"],[3,"AggregateRootBuilder"],[3,"Repository"],[3,"PersistedEvent"],[3,"AsAggregate"],[3,"EventStoreBuilder"],[3,"EventStore"]]},\
"eventually_core":{"doc":"Container for the fundamental types and abstraction to…","i":[[0,"aggregate","eventually_core","Foundation traits for creating Domain abstractions using…",null,null],[3,"AggregateRootBuilder","eventually_core::aggregate","Builder type for new [`AggregateRoot`] instances.",null,null],[3,"AggregateRoot","","An `AggregateRoot` represents an handler to the…",null,null],[6,"AggregateId","","A short extractor type for the Aggregate [`Id`].",null,null],[8,"Aggregate","","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"Id","","Aggregate identifier: this should represent an unique…",0,null],[16,"State","","State of the Aggregate: this should represent the Domain…",0,null],[16,"Event","","Represents a specific, domain-related change to the…",0,null],[16,"Command","","Commands are all the possible operations available on an…",0,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",0,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",0,[[],["result",4]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",0,[[],[["boxfuture",6],["result",4]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",1,[[],["result",4]]],[11,"build","","Builds a new [`AggregateRoot`] instance for the specified…",2,[[],["aggregateroot",3]]],[11,"build_with_state","","Builds a new [`AggregateRoot`] instance for the specified…",2,[[],["aggregateroot",3]]],[11,"id","","Returns a reference to the Aggregate [`Id`] that…",3,[[]]],[11,"state","","Returns a reference to the current Aggregate [`State`].",3,[[]]],[11,"handle","","Handles the submitted [`Command`] using the…",3,[[]]],[0,"repository","eventually_core","Contains the [Repository pattern] implementation for…",null,null],[3,"Repository","eventually_core::repository","Implementation of the [Repository pattern] for storing,…",null,null],[4,"Error","","Error type returned by the [`Repository`].",null,null],[13,"Aggregate","","Error returned by the [`Aggregate`], usually when…",4,null],[13,"Store","","Error returned by the underlying [`EventStore`].",4,null],[6,"Result","","Result type returned by the [`Repository`].",null,null],[11,"new","","Creates a new `Repository` instance, using the…",5,[[["aggregaterootbuilder",3]]]],[11,"get","","Returns the [`Aggregate`] from the `Repository` with the…",5,[[]]],[11,"add","","Adds a new [`State`] of the [`Aggregate`] into the…",5,[[["aggregateroot",3]]]],[11,"remove","","Removes the specified [`Aggregate`] from the `Repository`,…",5,[[]]],[0,"store","eventually_core","Contains the Event Store trait for storing and streaming…",null,null],[3,"PersistedEvent","eventually_core::store","An [`Event`] wrapper for events that have been…",null,null],[4,"Select","","Selection operation for the events to capture in an…",null,null],[13,"All","","To return all the [`Event`]s in the [`EventStream`].",6,null],[13,"From","","To return a slice of the [`EventStream`], starting from…",6,null],[6,"EventStream","","Stream type returned by the [`EventStore::stream`] method.",null,null],[8,"AppendError","","Error type returned by [`append`] in [`EventStore`]…",null,null],[10,"is_conflict_error","","Returns true if the error is due to a version conflict…",7,[[]]],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",8,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",8,null],[16,"Error","","Possible errors returned by the `EventStore` when…",8,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",8,[[["vec",3]],[["result",4],["boxfuture",6]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",8,[[["select",4]],[["boxfuture",6],["result",4]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",8,[[],[["result",4],["boxfuture",6]]]],[11,"with_version","","Updates the event version to the one specified.",9,[[]]],[11,"with_sequence_number","","Updates the sequence number version to the one specified.",9,[[]]],[11,"sequence_number","","Returns the event sequence number.",9,[[]]],[11,"take","","Unwraps the inner [`Event`] from the `PersistedEvent`…",9,[[]]],[0,"versioning","eventually_core","Contains support for Optimistic Concurrency Control…",null,null],[8,"Versioned","eventually_core::versioning","Data type that carries a version for Optimistic…",null,null],[10,"version","","Current version of the data.",10,[[]]],[11,"from","eventually_core::aggregate","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","eventually_core::repository","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","eventually_core::store","",9,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"version","eventually_core::aggregate","",3,[[]]],[11,"version","eventually_core::store","",9,[[]]],[11,"from","eventually_core::aggregate","",2,[[["arc",3]]]],[11,"from","eventually_core::store","",9,[[]]],[11,"clone","eventually_core::aggregate","",2,[[],["aggregaterootbuilder",3]]],[11,"clone","eventually_core::store","",9,[[],["persistedevent",3]]],[11,"clone","","",6,[[],["select",4]]],[11,"eq","eventually_core::aggregate","",3,[[]]],[11,"eq","eventually_core::store","",9,[[["persistedevent",3]]]],[11,"ne","","",9,[[["persistedevent",3]]]],[11,"eq","","",6,[[["select",4]]]],[11,"ne","","",6,[[["select",4]]]],[11,"fmt","eventually_core::aggregate","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","eventually_core::repository","",4,[[["formatter",3]],["result",6]]],[11,"fmt","eventually_core::store","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","eventually_core::repository","",4,[[["formatter",3]],["result",6]]],[11,"source","","",4,[[],[["error",8],["option",4]]]],[11,"serialize","eventually_core::aggregate","",3,[[],["result",4]]],[11,"serialize","eventually_core::store","",9,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]]],"p":[[8,"Aggregate"],[8,"AggregateExt"],[3,"AggregateRootBuilder"],[3,"AggregateRoot"],[4,"Error"],[3,"Repository"],[4,"Select"],[8,"AppendError"],[8,"EventStore"],[3,"PersistedEvent"],[8,"Versioned"]]},\
"eventually_postgres":{"doc":"[`eventually`] type implementations for PostgreSQL.","i":[[3,"EventStoreError","eventually_postgres","Error type returned by the [`EventStore`] implementation,…",null,null],[3,"EventStoreBuilder","","Builder type for [`EventStore`] instances.",null,null],[3,"EventStore","","[`EventStore`] implementation using a PostgreSQL backend.",null,null],[11,"event_stream","","Creates a new [`EventStore`] instance using the specified…",0,[[],["eventstore",3]]],[11,"aggregate_stream","","Creates a new [`EventStore`] for an [`Aggregate`] type,…",0,[[],[["aggregateid",6],["eventstore",3]]]],[11,"create_stream","","Creates a new table in the database for the provided…",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[["error",3]]]],[11,"from","","",0,[[["rwlock",3],["arc",3]]]],[11,"clone","","",1,[[],["eventstore",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"source","","",2,[[],[["error",8],["option",4]]]],[11,"is_conflict_error","","",2,[[]]],[11,"append","","",1,[[["vec",3]],[["result",4],["boxfuture",6]]]],[11,"stream","","",1,[[["select",4]],[["result",4],["boxfuture",6]]]],[11,"remove","","",1,[[],[["result",4],["boxfuture",6]]]]],"p":[[3,"EventStoreBuilder"],[3,"EventStore"],[3,"EventStoreError"]]},\
"eventually_test":{"doc":"","i":[[5,"main","eventually_test","",null,[[],[["box",3],["result",4]]]],[5,"run","","",null,[[]]],[0,"api","","",null,null],[5,"get_order","eventually_test::api","",null,[[["request",3],["appstate",3]]]],[5,"create_order","","",null,[[["request",3],["appstate",3]]]],[5,"add_order_item","","",null,[[["request",3],["appstate",3]]]],[5,"complete_order","","",null,[[["request",3],["appstate",3]]]],[5,"cancel_order","","",null,[[["request",3],["appstate",3]]]],[0,"config","eventually_test","",null,null],[3,"Config","eventually_test::config","",null,null],[12,"db_host","","",0,null],[12,"db_port","","",0,null],[12,"db_username","","",0,null],[12,"db_password","","",0,null],[12,"db_database","","",0,null],[12,"http_port","","",0,null],[12,"log_level","","",0,null],[11,"postgres_dsn","","",0,[[],["string",3]]],[11,"http_addr","","",0,[[]]],[0,"log","eventually_test","",null,null],[3,"Middleware","eventually_test::log","Log all incoming requests and responses.",null,null],[12,"_priv","","",1,null],[11,"new","","Create a new instance of `LogMiddleware`.",1,[[]]],[11,"log","","Log a request and a response.",1,[[["request",3],["sync",8],["send",8],["next",3]]]],[0,"order","eventually_test","",null,null],[3,"OrderItem","eventually_test::order","",null,null],[12,"item_sku","","",2,null],[12,"quantity","","",2,null],[12,"price","","",2,null],[3,"OrderItems","","",null,null],[12,"0","","",3,null],[3,"Order","","",null,null],[12,"id","","",4,null],[12,"created_at","","",4,null],[12,"items","","",4,null],[12,"state","","",4,null],[3,"OrderAggregate","","",null,null],[4,"OrderState","","",null,null],[13,"Editable","","",5,null],[12,"updated_at","eventually_test::order::OrderState","",6,null],[13,"Complete","eventually_test::order","",5,null],[12,"at","eventually_test::order::OrderState","",7,null],[13,"Cancelled","eventually_test::order","",5,null],[12,"at","eventually_test::order::OrderState","",8,null],[4,"OrderCommand","eventually_test::order","",null,null],[13,"Create","","",9,null],[13,"AddItem","","",9,null],[12,"item","eventually_test::order::OrderCommand","",10,null],[13,"Complete","eventually_test::order","",9,null],[13,"Cancel","","",9,null],[4,"OrderEvent","","",null,null],[13,"Created","","",11,null],[12,"id","eventually_test::order::OrderEvent","",12,null],[12,"at","","",12,null],[13,"ItemAdded","eventually_test::order","",11,null],[12,"item","eventually_test::order::OrderEvent","",13,null],[12,"at","","",13,null],[13,"Completed","eventually_test::order","",11,null],[12,"at","eventually_test::order::OrderEvent","",14,null],[13,"Cancelled","eventually_test::order","",11,null],[12,"at","eventually_test::order::OrderEvent","",15,null],[4,"OrderError","eventually_test::order","",null,null],[13,"AlreadyCreated","","",16,null],[13,"NotYetCreated","","",16,null],[13,"NotEditable","","",16,null],[13,"AlreadyCompleted","","",16,null],[13,"AlreadyCancelled","","",16,null],[11,"insert_or_merge","","",3,[[["orderitem",3]]]],[11,"happened_at","","",11,[[],["datetime",3]]],[0,"state","eventually_test","",null,null],[3,"AppState","eventually_test::state","",null,null],[12,"store","","",17,null],[12,"builder","","",17,null],[12,"repository","","",17,null],[6,"OrderAggregate","","",null,null],[6,"OrderStore","","",null,null],[6,"OrderRepository","","",null,null],[11,"from","eventually_test::config","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","eventually_test::log","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"handle","","",1,[[["next",3],["request",3]],[["pin",3],["box",3]]]],[11,"vzip","","",1,[[]]],[11,"from","eventually_test::order","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"to_string","","",16,[[],["string",3]]],[11,"borrow","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"from","eventually_test::state","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","eventually_test::order","",3,[[["vec",3],["orderitem",3]]]],[11,"clone","eventually_test::log","",1,[[],["middleware",3]]],[11,"clone","eventually_test::order","",2,[[],["orderitem",3]]],[11,"clone","","",5,[[],["orderstate",4]]],[11,"clone","","",4,[[],["order",3]]],[11,"clone","","",11,[[],["orderevent",4]]],[11,"clone","","",16,[[],["ordererror",4]]],[11,"clone","","",18,[[],["orderaggregate",3]]],[11,"eq","","",16,[[["ordererror",4]]]],[11,"fmt","eventually_test::log","",1,[[["formatter",3]],["result",6]]],[11,"fmt","eventually_test::order","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["fmtresult",6]]],[11,"handle","eventually_test::log","",1,[[["request",3],["next",3]],[["boxfuture",6],["result",6]]]],[11,"deserialize","eventually_test::order","",2,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"init","eventually_test::config","",0,[[],[["result",4],["error",4]]]],[11,"apply_first","eventually_test::order","",18,[[],["result",4]]],[11,"apply_next","","",18,[[],["result",4]]],[11,"handle_first","","",18,[[],[["boxfuture",6],["result",4]]]],[11,"handle_next","","",18,[[],[["boxfuture",6],["result",4]]]]],"p":[[3,"Config"],[3,"Middleware"],[3,"OrderItem"],[3,"OrderItems"],[3,"Order"],[4,"OrderState"],[13,"Editable"],[13,"Complete"],[13,"Cancelled"],[4,"OrderCommand"],[13,"AddItem"],[4,"OrderEvent"],[13,"Created"],[13,"ItemAdded"],[13,"Completed"],[13,"Cancelled"],[4,"OrderError"],[3,"AppState"],[3,"OrderAggregate"]]},\
"eventually_util":{"doc":"","i":[[0,"inmemory","eventually_util","Contains supporting entities using an in-memory backend.",null,null],[3,"EventStoreBuilder","eventually_util::inmemory","Builder for [`EventStore`] instances.",null,null],[3,"EventStore","","An in-memory [`EventStore`] implementation, backed by an…",null,null],[11,"for_aggregate","","Builds a new [`EventStore`] instance compatible with the…",0,[[],["eventstore",3]]],[0,"optional","eventually_util","Contains a different flavour of the [`Aggregate`] trait,…",null,null],[3,"AsAggregate","eventually_util::optional","Newtype pattern to ensure compatibility between…",null,null],[8,"Aggregate","","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"Id","","Identifier type of the Aggregate.",1,null],[16,"State","","State of the Aggregate.",1,null],[16,"Event","","Events produced and supported by the Aggregate.",1,null],[16,"Command","","Commands supported by the Aggregate.",1,null],[16,"Error","","Error produced by the the Aggregate while applying…",1,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",1,[[],["result",4]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",1,[[],["result",4]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",1,[[],[["result",4],["boxfuture",6]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",1,[[],[["boxfuture",6],["result",4]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",1,[[],["asaggregate",3]]],[11,"from","eventually_util::inmemory","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","eventually_util::optional","",3,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"clone","eventually_util::inmemory","",2,[[],["eventstore",3]]],[11,"clone","eventually_util::optional","",3,[[],["asaggregate",3]]],[11,"default","eventually_util::inmemory","",2,[[]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","eventually_util::optional","",3,[[["formatter",3]],["result",6]]],[11,"apply","","",3,[[],["result",4]]],[11,"handle","","",3,[[],[["result",4],["boxfuture",6]]]],[11,"append","eventually_util::inmemory","",2,[[["vec",3]],[["boxfuture",6],["result",4]]]],[11,"stream","","",2,[[["select",4]],[["result",4],["boxfuture",6]]]],[11,"remove","","",2,[[],[["boxfuture",6],["result",4]]]]],"p":[[3,"EventStoreBuilder"],[8,"Aggregate"],[3,"EventStore"],[3,"AsAggregate"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);