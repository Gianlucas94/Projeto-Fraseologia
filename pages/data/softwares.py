import os

print('Criando lista de softwares...')

remote = 'Z:\\' 
sof_cor = remote + 'SOFTWARE_CORPORATIVO'
sof_lic = remote + 'SOFTWARE_LICENCIADO'
sof_res = remote + 'SOFTWARE_RESTRITO'

# create
sof_cor = os.listdir(sof_cor)
sof_lic = os.listdir(sof_lic)
sof_res = os.listdir(sof_res)
sof_list = sof_cor + sof_lic + sof_res

# organizer
sof_list.sort() # sort list
sof_list = list(set(sof_list)) # remove duplicates

# salve
f = open('softwares.js', 'w')
f.write('export const softwares =' + str(sof_list))
f.close()

print('Lista salva')