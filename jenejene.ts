function identity<Type>(val: Type): Type {
    return val;
  }
  
  // 文字列と数字以外も入れられる
  const boolOutput = identity<boolean>(true);
  
  const strOutput = identity<string>('hoge');
  // 文字列として扱える
  console.log(strOutput.length);

