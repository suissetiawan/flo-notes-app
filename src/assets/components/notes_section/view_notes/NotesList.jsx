import NotesCard from "./NotesCard";

function NotesList({ datas, onPost, onArchive, onDelete }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
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
  );
}

export default NotesList;
