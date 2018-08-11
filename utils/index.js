import fs from 'fs';

const readFile = (path, opts = 'utf8') => {
  return new Promise((res, rej) => {
    fs.readFile(path, opts, (err, data) => {
        if (err) {
          console.log(err);
          rej(err)
        } else {
          res(data);
        }
    })
  });
};

const getPostListsFromFs = async () => {
  const json = await readFile('static/posts.json');
  return JSON.parse(json);
};

const getPostListsFromServer = async () => {
  const res = await fetch('/static/posts.json');
  return await res.json();
};

export async function getPostLists() {
  if (process.browser) {
    return getPostListsFromServer();
  } else {
    return getPostListsFromFs();
  }
};

const getPostContentFromFs = async (fname) => {
  return await readFile(`static/posts/${fname}`);
};

const getPostContentFromServer = async (fname) => {
  const res = await fetch(`/static/posts/${fname}`);
  return await res.text();
};

export async function getPostContent(fname) {
  if (process.browser) {
    return getPostContentFromServer(fname);
  } else {
    return getPostContentFromFs(fname);
  }
};
