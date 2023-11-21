// import { EventBusService, OrderService } from "@medusajs/medusa"

// type InjectedDependencies = {
//   eventBusService: EventBusService
//   orderService: OrderService
//   sendgridService: any
// }

// class OrderConfirmationSubscriber {
//   protected readonly orderService_: OrderService
//   protected readonly sendgridService_: any

//   constructor({ 
//     eventBusService, 
//     orderService, 
//     sendgridService,
//   }: InjectedDependencies) {
//     this.orderService_ = orderService
//     this.sendgridService_ = sendgridService
//     eventBusService.subscribe(
//       "order.placed", 
//       this.handleOrderConfirmation
//     )
//   }

//   handleOrderConfirmation = async (
//     data: Record<string, any>
//   ) => {
//     const order = await this.orderService_.retrieve(data.id, {
//       // you can include other relations as well
//       relations: ["items"],
//     })
//     this.sendgridService_.sendEmail({
//       templateId: process.env.SENDGRID_ORDER_PLACED_ID,
//       from: process.env.SENDGRID_FROM,
//       to: order.email,
//       dynamic_template_data: {
//         // any data necessary for your template...
//         items: order.items,
//         status: order.status,
//       },
//     })
//   }
// }

// export default OrderConfirmationSubscriber