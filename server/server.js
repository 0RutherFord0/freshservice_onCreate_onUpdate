exports = {
  onTicketCreateHandler: function (payload) {
    // console.log("Payload", payload);
    var Ticket_Attchment = payload.data.ticket.attachments.map(
      (x) => x.attachment_url
    );
    var slice_Ticket_Attchment = Ticket_Attchment.join("\n\n");
    console.log("Payload URL:", slice_Ticket_Attchment);
  },

  onTicketUpdateCallback: function (payload) {
    var Ticket_Attchment = payload.data.ticket.attachments.map(
      (x) => x.attachment_url
    );
    var slice_Ticket_Attchment = Ticket_Attchment.join("\n\n");
    console.log("Payload URL:", slice_Ticket_Attchment);
  },
};
