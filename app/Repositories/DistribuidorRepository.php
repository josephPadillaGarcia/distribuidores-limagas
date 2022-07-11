<?php 

namespace App\Repositories;

use App\BranchOffice;

class DistribuidorRepository
{
    public function search($id,$q,$pagination){
        $users = BranchOffice::where('id','!=',1)->where('id','!=',$id)->where(function($query) use ($q) {
            $query->where('name','like', '%'.$q.'%')
              ->orWhere('direction','like', '%'.$q.'%');
        })->orderBy('created_at', 'DESC')
        ->paginate($pagination);
        foreach($users as $user){
            /*if($user["avatar"]){
                $avatar = route('cms.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => $user["avatar"]]);
                $avatarHtml = "<div class='media align-items-center'><span class='avatar avatar-sm mr-3 rounded-circle bg-primary'><img src='".$avatar."' /></span>".$user["name"]."</div> ";
            }
            else{
                $avatarHtml = "<div class='media align-items-center'><span class='avatar avatar-sm mr-3 rounded-circle bg-primary'>".$user["avatar_initials"]."</span>".$user["name"]."</div> ";
            }*/
            $data[] = array(
                "id" => $user["id"],
                "name" => $user["name"],
                "direction" => $user["direction"],
            );
        }
        $users = $users->toArray();
        if(isset($data)){
            $users["data"] = '';
            $users["data"] = $data;
        } 
        return $users;
    }

    public function datatable($id,$pagination){
        $users = BranchOffice::orderBy('id', 'DESC')
        ->paginate($pagination);
        foreach($users as $user){
            /*if($user["avatar"]){
                $avatar = route('cms.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => $user["avatar"]]);
                $avatarHtml = "<div class='media align-items-center'><span class='avatar avatar-sm mr-3 rounded-circle bg-primary'><img src='".$avatar."' /></span>".$user["name"]."</div> ";
            }
            else{
                $avatarHtml = "<div class='media align-items-center'><span class='avatar avatar-sm mr-3 rounded-circle bg-primary'>".$user["avatar_initials"]."</span>".$user["name"]."</div> ";
            }*/
            $data[] = array(
                "id" => $user["id"],
                "name" => $user["name"],
                "direction" => $user["direction"],
            );
        }
        $users = $users->toArray();
        if(isset($data)){
            $users["data"] = '';
            $users["data"] = $data;
        } 
        return $users;
    }
}