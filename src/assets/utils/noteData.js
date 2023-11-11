const getInitialData = () => [
  {
    id: 1699459809387,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    noteTheme: "bg-cyan-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 1699459810372,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    noteTheme: "bg-purple-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 1699459810487,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    noteTheme: "bg-zinc-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: true,
  },
  {
    id: 1699459811457,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    noteTheme: "bg-fuchsia-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 1699459811557,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    noteTheme: "bg-teal-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: true,
  },
  {
    id: 1699459811657,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    noteTheme: "bg-indigo-900",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
