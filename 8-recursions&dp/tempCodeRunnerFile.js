  data.reduce((acc, val) => {
      return val.country == 'China' ? acc : acc + val.pop;
    }, 0);