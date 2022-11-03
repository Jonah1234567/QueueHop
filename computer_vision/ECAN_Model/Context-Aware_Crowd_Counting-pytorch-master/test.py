import torch
import matplotlib.pyplot as plt
import matplotlib.cm as CM
from tqdm import tqdm
import numpy as np
from PIL import Image

from cannet import CANNet
from my_dataset import CrowdDataset
from my_dataset import CrowdDataset_2


def cal_mae(img_root,gt_dmap_root,model_param_path):
    '''
    Calculate the MAE of the test data.
    img_root: the root of test image data.
    gt_dmap_root: the root of test ground truth density-map data.
    model_param_path: the path of specific mcnn parameters.
    '''
    device=torch.device("cpu")
    model=CANNet()
    model.load_state_dict(torch.load(model_param_path))
    model.to(device)
    dataset=CrowdDataset(img_root,gt_dmap_root,8,phase='test')
    dataloader=torch.utils.data.DataLoader(dataset,batch_size=1,shuffle=False)
    model.eval()
    mae=0
    with torch.no_grad():
        for i,(img,gt_dmap) in enumerate(tqdm(dataloader)):
            img=img.to(device)
            gt_dmap=gt_dmap.to(device)
            # forward propagation
            et_dmap=model(img)
            mae+=abs(et_dmap.data.sum()-gt_dmap.data.sum()).item()
            del img,gt_dmap,et_dmap

    print("model_param_path:"+model_param_path+" mae:"+str(mae/len(dataloader)))

def estimate_density_map(img_root,gt_dmap_root,model_param_path,index):
    '''
    Show one estimated density-map.
    img_root: the root of test image data.
    gt_dmap_root: the root of test ground truth density-map data.
    model_param_path: the path of specific mcnn parameters.
    index: the order of the test image in test dataset.
    '''
    device=torch.device("cpu")
    model=CANNet().to(device)
    model.load_state_dict(torch.load(model_param_path))
    dataset=CrowdDataset(img_root,gt_dmap_root,8,phase='test')
    dataloader=torch.utils.data.DataLoader(dataset,batch_size=1,shuffle=False)
    model.eval()
    for i,(img,gt_dmap) in enumerate(dataloader):
        if i==index:
            img=img.to(device)
            gt_dmap=gt_dmap.to(device)
            # forward propagation
            et_dmap=model(img).detach()
            et_dmap=et_dmap.squeeze(0).squeeze(0).cpu().numpy()
            print(et_dmap.shape)
            plt.imshow(et_dmap,cmap=CM.jet)
            plt.show()
            break

def single_density_map(img_root,model_param_path,index):
    '''
    Show one estimated density-map.
    img_root: the root of test image data.
    gt_dmap_root: the root of test ground truth density-map data.
    model_param_path: the path of specific mcnn parameters.
    index: the order of the test image in test dataset.
    '''
    device=torch.device("cpu")
    model=CANNet().to(device)
    model.load_state_dict(torch.load(model_param_path))
    dataset=CrowdDataset_2(img_root,8,phase='test')
    dataloader=torch.utils.data.DataLoader(dataset,batch_size=1,shuffle=False)
    model.eval()
    for i,img in enumerate(dataloader):
        if i==index:
            img=img.to(device)
            # forward propagation
            et_dmap=model(img).detach()
            et_dmap=et_dmap.squeeze(0).squeeze(0).cpu().numpy()
            print("test")
            print(et_dmap.shape)
            np.savetxt('dmap.csv',et_dmap,delimiter=',')
            et_dmap.view()
            plt.plot(et_dmap)
            break

if __name__=="__main__":
    torch.backends.cudnn.enabled=False # try switching this to true for cuda enabled above
    model_param_path='C:\\Users\\julia\\PycharmProjects\\context-aware-cc\\Context-Aware_Crowd_Counting-pytorch-master\\Context-Aware_Crowd_Counting-pytorch-master\\checkpoints\\epoch_2.pth'
    #cal_mae(img_root,gt_dmap_root,model_param_path)
    #estimate_density_map(img_root,gt_dmap_root,model_param_path,3)

    # Generate density map for new data
    img_root = 'C:\\Users\\julia\\PycharmProjects\\context-aware-cc\\Context-Aware_Crowd_Counting-pytorch-master\\sample'
    misc_x = np.linspace(0, 1, 5)
    misc_y = np.linspace(0, 2, 5)
    plt.plot(misc_x, misc_y)
    single_density_map(img_root, model_param_path, 0)