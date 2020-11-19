(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TotalOrdersProjection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderItems","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Order","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderAggregate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderState","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderCommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrderError","synthetic":true,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; UnwindSafe for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Event: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Id: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::State: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Store&gt; UnwindSafe for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; UnwindSafe for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; UnwindSafe for Persisted&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Select","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expected","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; UnwindSafe for EventBuilder&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; UnwindSafe for EventBuilderWithVersion&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; UnwindSafe for EventBuilderWithSequenceNumber&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Store, Subscriber&gt; UnwindSafe for Transient&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl UnwindSafe for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Tls&gt; !UnwindSafe for EventStoreBuilderMigrated&lt;Tls&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event, Tls&gt; !UnwindSafe for EventStore&lt;Id, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeserializeError","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !UnwindSafe for EventSubscriber&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event, Tls&gt; !UnwindSafe for PersistentBuilder&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event, Tls&gt; !UnwindSafe for Persistent&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id, Event&gt; !UnwindSafe for EventStore&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; UnwindSafe for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !UnwindSafe for PersistentSubscription&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BuilderWithSourceName","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for StoreError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SubscriberError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SubscriptionError","synthetic":true,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; !UnwindSafe for Projector&lt;P, S&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConflictError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubscriberError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; !UnwindSafe for EventStore&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; UnwindSafe for AsAggregate&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()