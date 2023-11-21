import { SegmentService } from "medusa-plugin-segment"
class CustomerSubscriber {
    segmentService: SegmentService; // Use the exact type here
 
    constructor({ segmentService, eventBusService }) {
      this.segmentService = segmentService
  
      eventBusService.subscribe(
        "customer.created",
        this.handleCustomer
      )
    }
  
    handleCustomer = async (data) => {
      const customerData = data
      delete customerData["password_hash"]
  
      this.segmentService.track({
        event: "Customer Created",
        userId: data.id,
        properties: customerData,
      })
    }
 }
 
 export default CustomerSubscriber;