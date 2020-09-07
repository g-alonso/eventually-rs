initSidebarItems({"fn":[["spawn","Spawns a new asynchronous task, returning a `JoinHandle` for it."]],"mod":[["aggregate",""],["inmemory",""],["optional",""],["postgres",""],["repository",""],["store",""],["subscription",""],["sync",""],["versioning",""]],"struct":[["AggregateRoot","An `AggregateRoot` represents an handler to the [`Aggregate`] it's managing, such as:"],["AggregateRootBuilder","Builder type for new [`AggregateRoot`] instances."],["Repository","Implementation of the [Repository pattern] for storing, retrieving and deleting [`Aggregate`]s."]],"trait":[["Aggregate","An Aggregate manages a domain entity [`State`], acting as a transaction boundary."],["AggregateExt","Extension trait with some handy methods to use with [`Aggregate`]s."],["EventStore","An Event Store is an append-only, ordered list of [`Event`]s for a certain \"source\" -- e.g. an [`Aggregate`]."],["EventSubscriber","Component to let users subscribe to newly-inserted events into the [`EventStore`]."],["Projection","A `Projection` is an optimized read model (or materialized view) of an [`Aggregate`] model(s), that can be assembled by left-folding its previous state and a number of ordered, consecutive events."],["Versioned","Data type that carries a version for Optimistic Concurrency Control."]],"type":[["AggregateId","A short extractor type for the Aggregate [`Id`]."]]});