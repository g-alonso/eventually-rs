(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TotalOrdersProjection","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderItem","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderItems","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Order","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderAggregate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderEvent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrderError","synthetic":true,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Event: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Id: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::State: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Store&gt; RefUnwindSafe for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; RefUnwindSafe for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; RefUnwindSafe for Persisted&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Select","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Expected","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; RefUnwindSafe for EventBuilder&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; RefUnwindSafe for EventBuilderWithVersion&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; RefUnwindSafe for EventBuilderWithSequenceNumber&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Store, Subscriber&gt; RefUnwindSafe for Transient&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl RefUnwindSafe for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Tls&gt; !RefUnwindSafe for EventStoreBuilderMigrated&lt;Tls&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event, Tls&gt; !RefUnwindSafe for EventStore&lt;Id, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeserializeError","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !RefUnwindSafe for EventSubscriber&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event, Tls&gt; !RefUnwindSafe for PersistentBuilder&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event, Tls&gt; !RefUnwindSafe for Persistent&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id, Event&gt; !RefUnwindSafe for EventStore&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; RefUnwindSafe for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !RefUnwindSafe for PersistentSubscription&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BuilderWithSourceName","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for StoreError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SubscriberError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SubscriptionError","synthetic":true,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; !RefUnwindSafe for Projector&lt;P, S&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConflictError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubscriberError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !RefUnwindSafe for EventStore&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for AsAggregate&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()