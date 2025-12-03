const mode = 'testing';
// const mode = 'enforce';
const max_age = 604800; // 1 week
const mx_list = [
   'aspmx.l.google.com',
   'alt1.aspmx.l.google.com',
   'alt2.aspmx.l.google.com',
   'alt3.aspmx.l.google.com',
   'alt4.aspmx.l.google.com'
];

const sts = `version: STSv1
mode: ${mode}
${mx_list.map(i=> 'mx: '+i).join('\n')}
max_age: ${max_age}`;

addEventListener('fetch', evt=> {
  return evt.respondWith(new Response(sts));
});
