frappe.ui.form.on("Batch", "validate", function(frm){
  bid = frm.doc.item.substring(0,3) + "-" + frm.doc.year + "-" + frm.doc.invoice_number;
  frm.doc.batch_id = bid;
  msgprint(bid);
});