import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, ArchivedIcon, PostIcon } from "../../../icons/MyIcon";
import { showFormattedDate } from "../../../utils/noteData";

function NotesCard({
  id,
  title,
  body,
  createdAt,
  archived,
  noteTheme,
  onPost,
  onArchive,
  onDelete,
}) {
  const actionButton = (isArchived) => {
    if (isArchived)
      return (
        <Tooltip content="Move to Notes">
          <Button
            isIconOnly
            onClick={() => onPost(id)}
            color="success"
            variant="flat"
            aria-label="Post Note">
            <PostIcon />
          </Button>
        </Tooltip>
      );
    else
      return (
        <Tooltip content="Move to Archived">
          <Button
            isIconOnly
            onClick={() => onArchive(id)}
            color="warning"
            variant="flat"
            aria-label="Add to archived">
            <ArchivedIcon />
          </Button>
        </Tooltip>
      );
  };

  return (
    <Card key={id} className={noteTheme}>
      <CardHeader className="flex justify-between gap-2">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <div className="flex gap-2">
          {actionButton(archived)}
          <Tooltip content="Delete :(">
            <Button
              isIconOnly
              onClick={() => onDelete(id)}
              color="danger"
              variant="flat"
              aria-label="Delete note">
              <DeleteIcon />
            </Button>
          </Tooltip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{body}</p>
      </CardBody>
    </Card>
  );
}

export default NotesCard;
