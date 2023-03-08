/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
let users = [
  {
    nama: "Ahmad Ihsanullah Rabbani",
    umur: 20,
    major: "Software Engineer",
  },
  {
    nama: "Muhamad Andi Galih",
    umur: 20,
    jenisKelamin: "Data Engineer",
  },
  {
    nama: "Rizwan Nur Saputra",
    umur: 20,
    jenisKelamin: "Network Engineer",
  },
  {
    nama: "Sulthan Salman",
    umur: 21,
    jenisKelamin: "Cyber Security",
  },
  {
    nama: "Ahmad Fauzi Ariyanto",
    umur: 20,
    jenisKelamin: "Software Engineer",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  // cara 1
  // for(var i = 0; i < users.length; i++) {
  //     for(const data in users[i]) {
  //         console.log(`${data} : ${users[i][data]}`);
  //     }
  //     console.log("--------------------------------");
  // }

  // cara 2
  for (const data of users) {
    for (const person in data) {
      console.log(`${person} : ${data[person]}`);
    }
    console.log("--------------------------------");
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => users.push(user);

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => users[index] = user;

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => users.splice(index,1);

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);
  all();
  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);
  all();

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
  all();

};

main();
all();
/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
