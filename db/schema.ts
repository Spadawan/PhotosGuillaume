import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const folders=sqliteTable('folders',{id:text('id').primaryKey(),name:text('name').notNull(),position:integer('position').notNull()});
export const photos=sqliteTable('photos',{id:text('id').primaryKey(),name:text('name').notNull(),key:text('key').notNull(),type:text('type').notNull(),size:integer('size').notNull(),position:integer('position').notNull(),folderId:text('folder_id')});
export const settings=sqliteTable('settings',{key:text('key').primaryKey(),value:text('value').notNull()});
export const sessions=sqliteTable('sessions',{hash:text('hash').primaryKey(),expires:integer('expires').notNull()});
export const attempts=sqliteTable('attempts',{key:text('key').primaryKey(),count:integer('count').notNull(),expires:integer('expires').notNull()});
