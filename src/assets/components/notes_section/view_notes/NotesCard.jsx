import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import { DeleteIcon, ArchivedIcon, PostIcon } from "../../../icons/MyIcon";
import { showFormattedDate } from "../../../utils/noteData";

function NotesCard({
  id,
  title,
  body,
  createdAt,
  archived,
  noteTheme,
  onDelete,
}) {
  const actionButton = (isArchived) => {
    if (isArchived)
      return (
        <Button
          isIconOnly
          color="success"
          variant="flat"
          aria-label="Post Note">
          <PostIcon />
        </Button>
      );
    else
      return (
        <Button
          isIconOnly
          color="warning"
          variant="flat"
          aria-label="Add to archived">
          <ArchivedIcon />
        </Button>
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
          <Button
            isIconOnly
            onClick={() => onDelete(id)}
            color="danger"
            variant="flat"
            aria-label="Delete note">
            <DeleteIcon />
          </Button>
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
