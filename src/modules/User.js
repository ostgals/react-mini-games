
class User {
  static loadStats(userId) {
    if (userId) {
      // load stats from database
    }
    else {
      // load stats from localStorage
      return new Promise((resolve, reject) => {
        const stats = localStorage[stats];
        stats ? resolve(JSON.parse(stats)) : reject();
      });
    }
  }
}

export default User;