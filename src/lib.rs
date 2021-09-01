#[macro_use]
extern crate napi_derive;

#[module_exports]
fn init(mut exports: napi::JsObject) -> napi::Result<()> {
    exports.create_named_method("refBuffer", ref_buffer)?;
    Ok(())
}

#[js_function(1)]
fn ref_buffer(ctx: napi::CallContext) -> napi::Result<napi::JsNumber> {
    let buffer = ctx.get::<napi::JsObject>(0)?;
    let ref_buffer = ctx.env.create_reference(buffer)?;
    let ref_count = ref_buffer.unref(ctx.env.clone())?;
    ctx.env.create_uint32(ref_count)
}
