import os;
import json;

folder = r"./build/_dist_"

def file_filter(f):
    if f.endswith(".json"):
        return True
    else:
        return False

def all_path(dirname):

    result = []#所有的文件

    for maindir, subdir, file_name_list in os.walk(dirname):

        #print("1:",maindir) #当前主目录
        #print("2:",subdir) #当前主目录下的所有目录
        #print("3:",file_name_list)  #当前主目录下的所有文件

        for filename in file_name_list:
            apath = os.path.join(maindir, filename)#合并成一个完整路径
            result.append(apath)

    return result



def read_file(files):
	dict = []

	for file in files:
		with open(file,'r') as load_file:
			load_dict = json.load(load_file)
			dict.append(load_dict)

	return dict
	
def file_replace(file,dict):
	
	with open(file,'+r') as f:
		t = f.read()
		for key in dict:
			t = t.replace(dict[key],key)
 
		#读写偏移位置移到最开始处
		f.seek(0, 0)
		f.write(t)
 
		# 设置文件结尾 EOF 
		f.truncate()
	
if __name__ == '__main__':
	files = list(filter(file_filter, all_path(folder)))
	for file in files:
		print(file)
	dictArray = read_file(files)
	
	#过滤文件名，获取index.js
	targetFiles = os.listdir('./build/js')
	for tfile in targetFiles:
		print(tfile)
	
	for dict in dictArray:
		for key in dict:
			print(key +":" + dict[key])
		file_replace('./build/js/' +targetFiles[0],dict)
		
		
	





































































