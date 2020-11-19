(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl Clone for TotalOrdersProjection","synthetic":false,"types":[]},{"text":"impl Clone for OrderItem","synthetic":false,"types":[]},{"text":"impl Clone for OrderState","synthetic":false,"types":[]},{"text":"impl Clone for Order","synthetic":false,"types":[]},{"text":"impl Clone for OrderEvent","synthetic":false,"types":[]},{"text":"impl Clone for OrderError","synthetic":false,"types":[]},{"text":"impl Clone for OrderAggregate","synthetic":false,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Aggregate,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, Store:&nbsp;Clone&gt; Clone for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Aggregate + Clone + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: EventStore&lt;SourceId = T::Id, Event = T::Event&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for Select","synthetic":false,"types":[]},{"text":"impl Clone for Expected","synthetic":false,"types":[]},{"text":"impl&lt;SourceId:&nbsp;Clone, T:&nbsp;Clone&gt; Clone for Persisted&lt;SourceId, T&gt;","synthetic":false,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone, Tls:&nbsp;Clone&gt; Clone for EventStore&lt;Id, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tls: MakeTlsConnect&lt;Socket&gt; + Clone + Send + Sync + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as MakeTlsConnect&lt;Socket&gt;&gt;::Stream: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as MakeTlsConnect&lt;Socket&gt;&gt;::TlsConnect: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Tls as MakeTlsConnect&lt;Socket&gt;&gt;::TlsConnect as TlsConnect&lt;Socket&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for DeserializeError","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone&gt; Clone for EventSubscriber&lt;Id, Event&gt;","synthetic":false,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone&gt; Clone for EventStore&lt;Id, Event&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone&gt; Clone for EventSubscriber&lt;Id, Event&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone&gt; Clone for PersistentSubscription&lt;Id, Event&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Builder","synthetic":false,"types":[]},{"text":"impl Clone for BuilderWithSourceName","synthetic":false,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;Id:&nbsp;Clone, Event:&nbsp;Clone&gt; Clone for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Hash + Eq,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Clone&gt; Clone for AsAggregate&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()