function swap(a, b){
  let t = a;
  a = b;
  b = t;
  return [a, b]
}

function minimumBribes(A)
{
  let n = A.length;
  let cnt = 0;
  for(let i = n - 1; i >= 0; i--)
  {
    if(A[i] != (i + 1))
    {
      if(((i - 1) >= 0) && A[i - 1] == (i + 1))
      {
        cnt++;
        [A[i], A[i - 1]] = swap(A[i], A[i-1]);
      }
      else if(((i - 2) >= 0) && A[i - 2] == (i + 1))
      {
        cnt += 2;
        A[i - 2] = A[i - 1];
        A[i - 1] = A[i];
        A[i] = i + 1;
      }
      else
      {
        return "Too chaotic";
      }
    }
    console.log(i);
    console.log(JSON.stringify(A));
  }
  return cnt;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));