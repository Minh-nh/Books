import { ControllerType } from "./controllerTypes";
import AuthorController from "./sub_controllers/authorController";
import BookController from "./sub_controllers/bookController";
import BorrowedTicketController from "./sub_controllers/borrowedTicketController";
import LibrarianController from "./sub_controllers/librarianController";
import PublishingHouseController from "./sub_controllers/publishingHouseController";

export default class ControllerFactory {
    public static createController(type: ControllerType): any {
        switch (type) {
            case ControllerType.BOOK:
                return BookController.getInstance();
            case ControllerType.AUTHOR:
                return AuthorController.getInstance();
            case ControllerType.LIBRARIAN:
                return LibrarianController.getInstance();
            case ControllerType.PUBLISHING_HOUSE:
                return PublishingHouseController.getInstance();
            case ControllerType.BORROWED_TICKET:
                return BorrowedTicketController.getInstance();
            default:
                return null;
        }
    }
}