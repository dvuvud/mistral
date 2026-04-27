ALTER TABLE children 
ADD CONSTRAINT unique_child_name_group UNIQUE (name, group_id);

