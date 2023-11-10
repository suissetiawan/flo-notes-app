import NotesCard from "./NotesCard";
import EmptyState from "./EmptyState";

function NotesList({ datas, onPost, onArchive, onDelete }) {
  return (
    <>
      {datas.length !== 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          {datas.map((data) => (
            <NotesCard
              key={data.id}
              {...data}
              onPost={onPost}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <EmptyState message="There's no note !" />
      )}
    </>
  );
}

export default NotesList;
