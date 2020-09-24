(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRoot.html\" title=\"struct eventually_core::aggregate::AggregateRoot\">AggregateRoot</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Id\" title=\"type eventually_core::aggregate::Aggregate::Id\">Id</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_core::aggregate::Aggregate::State\">State</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["eventually_core::aggregate::AggregateRoot"]},{"text":"impl&lt;SourceId, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"eventually_core/store/struct.Persisted.html\" title=\"struct eventually_core::store::Persisted\">Persisted</a>&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["eventually_core::store::Persisted"]}];
implementors["eventually_test"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"eventually_test/order/struct.TotalOrdersProjection.html\" title=\"struct eventually_test::order::TotalOrdersProjection\">TotalOrdersProjection</a>","synthetic":false,"types":["eventually_test::order::TotalOrdersProjection"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderItem.html\" title=\"struct eventually_test::order::OrderItem\">OrderItem</a>","synthetic":false,"types":["eventually_test::order::OrderItem"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderState.html\" title=\"enum eventually_test::order::OrderState\">OrderState</a>","synthetic":false,"types":["eventually_test::order::OrderState"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"eventually_test/order/struct.Order.html\" title=\"struct eventually_test::order::Order\">Order</a>","synthetic":false,"types":["eventually_test::order::Order"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.116/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderEvent.html\" title=\"enum eventually_test::order::OrderEvent\">OrderEvent</a>","synthetic":false,"types":["eventually_test::order::OrderEvent"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()